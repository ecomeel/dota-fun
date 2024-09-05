<template>
  <TheHeader />
  <main class="main">
    <div class="bg bg__top">
      <img alt="steam" src="/steam-bg.png">
    </div>
    <div class="container">
      <!-- <RouterView /> -->
      <HomeView />
    </div>
    <div class="bg bg__bottom bg__bottom_left">
      <img alt="steam" src="/steam-circle.png">
    </div>
    <div class="bg bg__bottom bg__bottom_right">
      <img alt="steam" src="/steam-circle.png">
    </div>
  </main>

  <TheFooter />
</template>

<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped lang="scss">
.main {
  position: relative;

  .container {
    position: relative;
    z-index: 2;
  }
}
.bg {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  display: none;

  &__top {
    opacity: 0.4;
    left: -15%;
    top: 0;
  }
  &__bottom {
    opacity: 0.15;
    bottom: 15%;
    &_left {
      left: -8%;
    }
    &_right {
      right: -8%;
      transform: scaleX(-1);
    }
  }

  @media (min-width: $screen-sm-min) {
    &__top {
      display: block;
      width: 140%;
    }
  }
  @media (min-width: $screen-m-min) {
    &__top {
      left: calc(100% - 100vw);
      width: 110vw;
    }
    &__bottom {
      display: block;
      width: 400px;
    }
  }
  @media (min-width: $screen-xxl-min) {
    width: 80vw;
    left: calc(100% - 90vw);

    &__bottom {
      width: 575px;
      bottom: 12%;
      &_left {
        left: -7%;
      }
      &_right {
        left: auto;
        right: -7%;
      }
    }
  }
}

</style>
