<template>
 <section id="faq" :class="$style.faq">
  <h2 :class="$style.faq__title">Вопросы и ответы</h2>
  <ElCollapse 
    v-model="activeFAQ"
    accordion
    :class="$style.faq__list"
  >
    <ElCollapseItem 
      v-for="(item, index) in FAQs"
      :key="index"
      :name="index"
      :title="item.question"
    >
      <div :class="$style.faq__description" v-html="item.answer" />
    </ElCollapseItem>
  </ElCollapse>
 </section>
</template>

<script setup lang="ts">
import { FAQs } from '@/constants/faqs'
import { ref } from 'vue'

const activeFAQ = ref('')
</script>

<style lang="scss" module>
.faq {
  &__title {
    @extend %large;
    text-align: center;
  }
  &__list {
    margin-top: 30px;
    & button {
      text-align: left;
    }
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
    a {
      color: $purple;
      text-decoration: underline;
    }
    img {
      margin-top: 25px;
    }
  }
  @media (width >= $screen-xl-min) {
    &__description img {
      margin-top: 1.74vw;
    }
  }
}
</style>