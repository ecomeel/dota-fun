<template>
  <ElDialog
    v-model="isPopupOpen"
    align-center
    :class="$style.popup"
    :close-icon="IconClose"
    @closed="() => isPopupOpen = false"
  >
    <div v-html="popupContent"></div>
  </ElDialog>
</template>
  
<script setup lang='ts'>
import { FAQs } from '@/constants/faqs'
import IconClose from '../icons/IconClose.vue'

const popupContent = FAQs[0].answer

const isPopupOpen = defineModel<boolean>('loginPopup')

</script>
  
<style lang="scss" module>
.popup {
  width: 85%;
  border-radius: 32px;
  p {
    @extend %normal;
    padding-right: 10%;
    color: $white;
  }
  img {
    margin-top: 25px;
  }
}
</style>