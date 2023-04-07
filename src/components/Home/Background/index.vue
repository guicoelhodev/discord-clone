<script setup lang="ts"></script>

<template>
  <div class="absolute layout">
    <img
      src="../../../static/svg/discord_assets/background_large.svg"
      class="img-bg m-auto"
    />

    <section class="absolute inset-1 flex overflow-hidden justify-center">
      <img
        class="img-sm mr-52"
        src="../../../static/svg/discord_assets/hang_out.svg"
      />
      <img
        class="img-sm ml-52"
        src="../../../static/svg/discord_assets/conversation.svg"
      />
    </section>
  </div>
</template>

<style scoped>
.img-bg {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  height: calc(100vh - 20rem);
}

.img-sm {
  width: 48rem;
  object-fit: contain;
  margin-top: auto;
}
</style>
