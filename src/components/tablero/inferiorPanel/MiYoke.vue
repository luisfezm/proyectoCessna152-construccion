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
            translationMultiplier: 1, // Multiplicador de traducción más bajo
            rotationMultiplier: 1, // Multiplicador de rotación más bajo
            currentTranslationY: 0,
            currentRotation: 0,
            targetTranslationY: 0,
            targetRotation: 0,
            maxTranslationY: 45,
            minTranslationY: -45,
            maxRotation: 90,
            minRotation: -90,
            activeKeys: new Set(),
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        this.updateImageTransform();
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    },
    methods: {
        handleKeyDown(event) {
            const key = event.key.toUpperCase();
            if (!this.activeKeys.has(key)) {
                this.activeKeys.add(key);
                this.presionarTeclaYoke();
            }
        },
        handleKeyUp(event) {
            const key = event.key.toUpperCase();
            this.activeKeys.delete(key);
            if (this.activeKeys.size === 0) {
                this.soltarTeclaYoke();
            }
        },
        presionarTeclaYoke() {
            store.dispatch('presionarTecla_yoke', this.activeKeys);
            this.updateMovement();
        },
        soltarTeclaYoke() {
            store.dispatch('soltarTecla_yoke');
            this.targetTranslationY = 0;
            this.targetRotation = 0;
            this.updateMovement();
        },
        updateMovement() {
            if (!this.animationFrameId) {
                this.animationFrameId = requestAnimationFrame(this.animate);
            }
        },
        animate() {
            let translationDelta = 0;
            let rotationDelta = 0;

            if (this.activeKeys.has('S')) {
                translationDelta -= this.translationMultiplier;
            }
            if (this.activeKeys.has('W')) {
                translationDelta += this.translationMultiplier;
            }
            if (this.activeKeys.has('A')) {
                rotationDelta -= this.rotationMultiplier;
            }
            if (this.activeKeys.has('D')) {
                rotationDelta += this.rotationMultiplier;
            }

            const easing = 0.1; // Factor de suavizado

            // Actualizar las posiciones objetivo
            this.targetTranslationY += translationDelta;
            this.targetRotation += rotationDelta;

            // Limitar las posiciones objetivo dentro de los límites
            this.targetTranslationY = Math.max(
                Math.min(this.targetTranslationY, this.maxTranslationY),
                this.minTranslationY
            );
            this.targetRotation = Math.max(
                Math.min(this.targetRotation, this.maxRotation),
                this.minRotation
            );

            // Aplicar el suavizado a las posiciones actuales
            this.currentTranslationY += (this.targetTranslationY - this.currentTranslationY) * easing;
            this.currentRotation += (this.targetRotation - this.currentRotation) * easing;

            this.updateImageTransform();

            // Verificar si se alcanzaron las posiciones objetivo
            const translationDiff = Math.abs(this.targetTranslationY - this.currentTranslationY);
            const rotationDiff = Math.abs(this.targetRotation - this.currentRotation);
            if (translationDiff < 0.1 && rotationDiff < 0.1) {
                this.animationFrameId = null;
                return;
            }

            // Continuar animando en el siguiente frame
            this.animationFrameId = requestAnimationFrame(this.animate);
        },
        updateImageTransform() {
            if (this.$refs.image) {
                this.$refs.image.style.transform = `translateY(${this.currentTranslationY}px) rotate(${this.currentRotation}deg)`;
            }
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
