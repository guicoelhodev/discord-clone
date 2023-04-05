<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const message = ref("Hello, world!");
const count = ref(0);

function increment() {
  count.value++;
  message.value = `You clicked the button ${count.value} times.`;
}
</script>
