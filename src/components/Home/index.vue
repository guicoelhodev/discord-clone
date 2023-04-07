<template>
  <div class="bg-blue-600">
    <Header />
    <Welcome />

    <div class="relative">
      <Background />
      <main class="layout">
        <section id="home-view" class="opacity-0">
          <h1 class="text-5xl">React > Vue</h1>
          <h2 class="text-3xl">Styled components > Tailwind</h2>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";

import Welcome from "./Welcome/index.vue";
import Header from "../Global/Header/index.vue";
import Background from "./Background/index.vue";

onMounted(() => {
  const getIntroStatus = window.sessionStorage.getItem("@HAS_INTRO_CLONE");

  if (getIntroStatus) {
    gsap.to("#home-view", { opacity: 1, delay: 1, duration: 0.8 });
  } else {
    gsap.to("#home-view", { opacity: 1, delay: 13, duration: 0.8 });
  }
});
</script>
