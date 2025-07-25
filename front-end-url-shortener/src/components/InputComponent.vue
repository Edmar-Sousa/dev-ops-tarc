<template>
    <input 
        type="text"
        class="input--text"
        :placeholder="placeholder"
        v-model="model" />
</template>

<script setup lang="ts">

defineProps({
    placeholder: {
        type: String,
        default: 'Cole o link aqui'
    }
});


const model = defineModel();

</script>

<style scoped>

.input--text {
    width: 100%;
    height: 50px;

    border: none;
    border-radius: 10px;

    font-family: Roboto;
    font-weight: 400;
    font-size: 0.7rem;

    padding: 0 10px;

    background: var(--white-color);
}

</style>