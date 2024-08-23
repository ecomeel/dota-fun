<template>
  <TheHeader />
  <main class="main container">
    <RouterView />
  </main>
  <!-- Footer -->
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped lang="scss">
.main {
  padding: 100px 0;
}
</style>
