<template>
  <TheHeader />
  <main class="main container">
    <RouterView />
  </main>
  <!--
    <img 
    alt=""
    class="bg bg__1"
    src="/steam-bg.png"
    > 
  -->
  <!-- Footer -->
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped lang="scss">
.main {
  padding: 100px 0;
}
.bg {
  position: absolute;
  &__1 {
    top: 100px;
    left: 200px;
    width: 70vw;
  }
}

</style>
