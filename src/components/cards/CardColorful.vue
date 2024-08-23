<template>
  <div :class="[ $style.card, CardTheme[`bg-${theme}`] ]">
    <p :class="$style.card__title">{{ title }}</p>
    <p :class="$style.card__text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import CardTheme from '@/assets/styles/modules/Card.module.scss'

type Props = {
  title: string;
  description: string;
  theme: 'red' | 'yellow'
}

defineProps<Props>()
</script>

<style lang="scss" module>
.card {
  padding: 21px;
  border-radius: 15px;
  &__title {
    font-size: 36px;
    font-weight: 700;
  }
  &__text {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>