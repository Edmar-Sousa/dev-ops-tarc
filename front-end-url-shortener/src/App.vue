<template>
  <main class="main" id="main">
    <h2 class="title">
      Crie <span class="title--orange">Links</span> atrativos <br />
      com um clique
    </h2>

    <p class="description">
      Crie links curtos poderosos e reconhecíveis!
    </p>

    <div class="input--container">
      <input-component v-model="url" />

      <button class="button" @click="handlerShortenUrl">
        Criar
      </button>
    </div>

    <p class="shorten-url" v-show="hasComplete">
      {{ completeLink }}
    </p>
  </main>
</template>

<script setup lang="ts">

import { shallowRef, ref, computed } from 'vue';
import InputComponent from './components/InputComponent.vue';
import { shortenUrl } from './services/urlShorten';

const url = shallowRef();

const shortener = ref({
  shorten: '',
  apiUrl: import.meta.env.VITE_API_URL,
});


const hasComplete = computed(() => shortener.value.shorten.length);
const completeLink = computed(() => `${shortener.value.apiUrl}/shortener/${shortener.value.shorten}`);

async function handlerShortenUrl() {
  try {
    const response = await shortenUrl(url.value);
    shortener.value.shorten = response.shortId;
  }

  catch (err) {
    console.log(err);
  }
}

</script>

<style scoped>

.main {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 15px;
}

.title {
  font-family: Roboto;
  font-size: 2rem;

  text-align: center;
  color: var(--white-color);
}

.description,
.shorten-url {
  font-family: Roboto;
  font-size: 0.7rem;
  margin-top: 30px;

  text-align: center;
  color: var(--white-color);
}

.shorten-url {
  margin-top: 40px;
}

.title--orange {
  color: var(--orange-color);
}

.input--container {
  width: 100%;
  margin: 50px auto 0;
}


.button {
  max-width: 150px;
  width: 100%;
  height: 50px;

  font-family: Roboto;
  font-weight: 500;
  font-size: 0.7rem;

  cursor: pointer;

  border: none;
  border-radius: 10px;

  display: block;
  margin: 50px auto 0;

  color: var(--white-color);
  background: var(--orange-color);

  z-index: 10;
}

@media (min-width: 425px) {
  .input--container {
    max-width: 600px;
    display: flex;
    gap: 16px;
  }

  .button {
    margin: 0;
  }
}

</style>
