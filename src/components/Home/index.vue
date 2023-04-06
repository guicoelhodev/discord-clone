<template>
  <div>
    <Welcome />

    <div>
      <section
        id="home-view"
        class="opacity-0 w-screen h-screen bg-white text-black grid place-content-center"
      >
        <h1 class="text-5xl">React > Vue</h1>
        <h2 class="text-3xl">Styled components > Tailwind</h2>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue";
import Welcome from "./Welcome/index.vue";

onMounted(() => {
  const getIntroStatus = window.sessionStorage.getItem("@HAS_INTRO_CLONE");

  if (getIntroStatus) {
    gsap.to("#home-view", { opacity: 1, delay: 1, duration: 0.8 });
  } else {
    gsap.to("#home-view", { opacity: 1, delay: 13, duration: 0.8 });
  }
});
</script>
