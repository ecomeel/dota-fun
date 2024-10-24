<template>
  <ElDialog
    v-model="isPopupOpen"
    align-center
    :class="$style.popup"
    :close-icon="IconClose"
    @closed="() => isPopupOpen = false"
  >
    <p>На данный момент эта возможность находится в разработке, в дальнейшем, промокоды можно будет использовать для снижения комиссии, а найти их можно будет в телеграм канале: <a href="">DotaFun</a>.</p>
  </ElDialog>
</template>
  
<script setup lang='ts'>
import IconClose from '../icons/IconClose.vue'

const isPopupOpen = defineModel<boolean>('promoPopup')

</script>
  
<style lang="scss" module>
.popup {
  width: 85%;
  border-radius: 32px;
  p {
    @extend %normal;
    padding-right: 5%;
    color: $white;
  }
  a {
    color: $purple;
    text-decoration: underline;
  }
}
</style>