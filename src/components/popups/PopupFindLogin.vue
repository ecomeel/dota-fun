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
@use '@/assets/styles/modules/Popup.module.scss';

.popup {
  p {
    padding-right: 10%;
  }
  img {
    margin-top: 25px;
    border-radius: 32px;
  }
}
</style>