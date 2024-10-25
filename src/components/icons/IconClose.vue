<template>
  <svg
    fill="none"
    :height="size"
    viewBox="0 0 24 24"
    :width="size"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :fill="colorGetter[fill]"
      height="3.75672"
      transform="rotate(-45 0 21.2512)"
      width="30.0537"
      y="21.2512"
    />
    <rect
      :fill="colorGetter[fill]"
      height="3.75672"
      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 23.9076 21.2512)"
      width="30.0537"
    />
  </svg>
</template>

<script setup lang="ts">
import type { ColorNames } from '@/types/commons'
import { colorGetter } from '@/constants/colors'

type ICloseIcon = {
  fill?: ColorNames,
  size?: string
}

withDefaults(defineProps<ICloseIcon>(), {
  fill: 'white',
  size: '24'
})

</script>
