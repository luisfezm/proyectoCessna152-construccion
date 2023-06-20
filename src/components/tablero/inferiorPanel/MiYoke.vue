<template>
    <div id="miDiv" class="MiYoke" :class="{ grabbing: isDragging }" ref="div">
        <img ref="image" src="src\assets\img\Yoke.png" :style="{
            transform: `translateY(${currentTranslationY}px) rotate(${currentRotation}deg)`,
            width: '80px',
            height: '70px'
        }" draggable="false" />
    </div>
</template>
  
<script>
import store from '@/store'

export default {
    data() {
        return {
            isDragging: false,
            translationMultiplier: 2, // Multiplicador de traducción más bajo
            rotationMultiplier: 2, // Multiplicador de rotación más bajo
            currentTranslationY: 0,
            currentRotation: 0,
            maxTranslationY: 25,
            minTranslationY: -25,
            maxRotation: 90,
            minRotation: -90,
            resetInterval: null,
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    },
    methods: {
        handleKeyDown(event) {
            const key = event.key.toUpperCase();
            if (key === 'A' || key === 'W' || key === 'S' || key === 'D') {
                this.presionarTeclaYoke(key);
            }
        },
        handleKeyUp(event) {
            const key = event.key.toUpperCase();
            if (key === 'A' || key === 'W' || key === 'S' || key === 'D') {
                this.soltarTeclaYoke();
            }
        },
        presionarTeclaYoke(key) {
            store.dispatch('presionarTecla_yoke', key);
            switch (key) {
                case 'S':
                    this.moveImageUp();
                    break;
                case 'W':
                    this.moveImageDown();
                    break;
                case 'A':
                    this.rotateImageLeft();
                    break;
                case 'D':
                    this.rotateImageRight();
                    break;
            }
        },
        soltarTeclaYoke() {
            store.dispatch('soltarTecla_yoke');
            this.resetMovement();
        },
        moveImageUp() {
            const newTranslationY = this.currentTranslationY - this.translationMultiplier;
            if (newTranslationY >= this.minTranslationY) {
                this.currentTranslationY = newTranslationY;
                this.updateImageTransform();
            }
        },
        moveImageDown() {
            const newTranslationY = this.currentTranslationY + this.translationMultiplier;
            if (newTranslationY <= this.maxTranslationY) {
                this.currentTranslationY = newTranslationY;
                this.updateImageTransform();
            }
        },
        rotateImageLeft() {
            const newRotation = this.currentRotation - this.rotationMultiplier;
            if (newRotation >= this.minRotation) {
                this.currentRotation = newRotation;
                this.updateImageTransform();
            }
        },
        rotateImageRight() {
            const newRotation = this.currentRotation + this.rotationMultiplier;
            if (newRotation <= this.maxRotation) {
                this.currentRotation = newRotation;
                this.updateImageTransform();
            }
        },
        updateImageTransform() {
            if (this.$refs.image) {
                this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px) rotate(${this.currentRotation}deg)`;
            }
        },
        resetMovement() {
            clearInterval(this.resetInterval);
            this.resetInterval = setInterval(() => {
                let translationDelta = 0;
                let rotationDelta = 0;

                if (this.currentTranslationY !== 0) {
                    translationDelta = this.currentTranslationY > 0 ? -1 : 1;
                }

                if (this.currentRotation !== 0) {
                    rotationDelta = this.currentRotation > 0 ? -1 : 1;
                }

                this.currentTranslationY += translationDelta;
                this.currentRotation += rotationDelta;
                this.updateImageTransform();

                if (this.currentTranslationY === 0 && this.currentRotation === 0) {
                    clearInterval(this.resetInterval);
                }
            }, 10);
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
