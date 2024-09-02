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
  <TheFooter />
</template>

<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  &__1 {
    top: 100px;
    left: 200px;
    width: 70vw;
  }
}

</style>
