<template>
  <ElForm class="topup" :model="form">
    <div class="topup__form">
      <ElFormItem label="Логин Steam">
        <ElInput v-model="form.name" class="topup__input">
          <template #append>
            <!-- <div>Где взять логин <div>?</div></div> -->
            где взять логин?
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem label="Сумма">
        <ElInput v-model="form.amount" type="number" />
        <p>До 10 000 рублей</p>
      </ElFormItem>
      <ElFormItem>
        <ElSlider v-model="form.amount" />
        <p>Время зачисления до 60 секунд</p>
      </ElFormItem>
      <ElFormItem label="Почта">
        <ElInput />
      </ElFormItem>
    </div>
    <div class="topup__form">
      <p>Hello</p>
    </div>
  </ElForm>
</template>

<script setup lang="ts">
// import {
//   ElForm,
//   ElFormItem,
//   ElInput,
//   ElSlider
// } from 'element-plus'
import { ref } from 'vue'

const form = ref({
  name: '',
  amount: 0,
})
</script>

<style scoped lang="scss">
.topup {
  &__form {
    padding: 25px 20px;
    border: 1px solid #4E768F;
    border-radius: 15px;
    background-color: #1529368C;
  }
}
</style>

