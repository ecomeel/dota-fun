<template>
  <div :class="[ $style.card, CardTheme[`bg-${theme}`] ]">
    <p :class="$style.card__title">{{ title }}</p>
    <p :class="$style.card__text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore-next-line
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
  padding: 14px;
  border-radius: 15px;
  &__title {
    @extend %large;
  }
  &__text {
    margin-top: 3px;
    @extend %small;
  }

  @media (min-width: $screen-xxl-min) {
    border-radius: 0.8vw;
    padding: .9vw;
  }
}
</style>