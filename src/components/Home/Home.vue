<template>
  <div class="bg-gray-200 p-4">
    <h1 class="text-2xl font-bold">{{ message }}</h1>
    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      @click="increment"
    >
      Increment
    </button>
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
