<template>
 <section id="faq" class="faq">
  <h2 class="faq__title">Вопросы и ответы</h2>
  <ElCollapse 
    v-model="activeFAQ"
    accordion
    class="faq__list"
  >
    <ElCollapseItem 
      v-for="(item, index) in FAQs"
      :key="index"
      :name="index"
      :title="item.question"
    >
      <div class="faq__description">{{ item.answer }}</div>
    </ElCollapseItem>
  </ElCollapse>
 </section>
</template>

<script setup lang="ts">
import { FAQs } from '@/constants/faqs'
import { ref } from 'vue'


const activeFAQ = ref('1')
</script>

<style lang="scss" scoped>
.faq {
  &__title {
    @extend %large;
    text-align: center;
  }
  &__list {
    margin-top: 30px;
    & > div:not(:first-child) {
      margin-top: 10px;
    }

    @media (min-width: $screen-m-min) {
      margin-top: 2vw;
      & > div:not(:first-child) {
        margin-top: 0.7vw;
      }
    }
  }
  &__description {
    @extend %normal;
  }
}
</style>