<template>
  <div class="card">
    <div v-if="img" class="card__image">
      <img 
        alt="image"
        :src="`${img}`"
      >
    </div>
    <p class="card__text" v-html="text" />
  </div>
</template>

<script setup lang="ts">
type Props = {
  text?: string;
  img?: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.card {
  padding: 25px 20px;
  display: flex;
  align-items: center;
  column-gap: 24px;
  background-color: $blue-transparent;
  border-radius: 15px;

  &__image {
    img {
      width: 70px;
    }
  }
  &__text {
    font-size: 28px;
    line-height: 1.2em;
  }
}
</style>