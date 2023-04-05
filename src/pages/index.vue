<script lang="ts" setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <Home :name="name" />
</template>
