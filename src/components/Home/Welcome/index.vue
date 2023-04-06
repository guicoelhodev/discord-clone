<template>
  <div
    id="welcome-div"
    class="z-1 absolute inset-0 w-screen h-screen bg-stone-950 text-xl flex items-center justify-center"
  >
    <section class="intro-section" id="discord-intro">
      <p>
        This project is just a clone UI <br />
        to pratice my front-end skills
      </p>
      <Icon icon="fa6-brands:discord" width="80" class="mt-4" />
    </section>

    <section class="intro-section" id="tools-intro">
      <p>Was created with Vue and Tailwind</p>

      <aside class="flex">
        <Icon icon="mdi:vuejs" width="80" />
        <Icon icon="mdi:tailwind" width="80" />
      </aside>

      <p>I hope that u enjoy it</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue2";
import { gsap } from "gsap";
import { onMounted } from "vue";

const fadeInAnimation = (divId: string, initialDelay: number) => {
  gsap.to(divId, {
    opacity: 1,
    duration: 2,
    delay: initialDelay,
  });
  gsap.to(divId, {
    opacity: 0,
    duration: 1.5,
    delay: initialDelay + 2.5,
    onComplete: () => {
      document.getElementById(divId)?.remove();
    },
  });
};

const removeAbsoluteWindow = () => {
  gsap.to("#welcome-div", {
    y: "-100%",
    duration: 0.5,
    delay: 12,
    onComplete: () => {
      gsap.to("#welcome-div", { display: "none" });

      return window.sessionStorage.setItem("@HAS_INTRO_CLONE", "already seen");
    },
  });
};

onMounted(() => {
  const getIntroStatus = window.sessionStorage.getItem("@HAS_INTRO_CLONE");

  if (!getIntroStatus) {
    fadeInAnimation("#discord-intro", 1);
    fadeInAnimation("#tools-intro", 7);
    removeAbsoluteWindow();
  } else {
    gsap.to("#welcome-div", { display: "none" });
  }
});
</script>
