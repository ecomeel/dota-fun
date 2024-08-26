<template>
  <ElForm class="topup" :model="form">
    <div class="topup__form">
      <ElFormItem label="Логин Steam">
        <ElInput
          v-model="form.name"
          class="topup__input" 
          placeholder="Ваш логин"
        >
          <template #append>
            <div class="topup__input--tip">
              <p>Где взять логин</p>
              <div class="topup__input--tip-icon">?</div>
            </div>
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem label="Сумма">
        <ElInput v-model="form.amount" type="number">
          <template #append>
            <p class="topup__input--tip">Комиссия сервиса 18%</p>
          </template>
        </ElInput>
        <p class="topup">До 10 000 рублей</p>
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
import { ref } from 'vue'

const form = ref({
  name: '',
  amount: 0,
})
</script>

<style scoped lang="scss">
.topup {
  &__form > *:not(:first-child) {
    margin-top: 20px;
  }
  &__form {
    padding: 25px 20px;
    border: 1px solid #4E768F;
    border-radius: 15px;
    background-color: #1529368C;
  }
  &__input {
    &--tip {
      position: absolute;
      right: 10px;
      top: calc(50% - 8px);
      display: flex;
      column-gap: 5px;
      // font-size: 12px;
      // color: #FFFFFFB2;
      @extend %extra-small;

      &-icon {
        padding: 0 5px;
        background-color: #D9D9D926;
        border-radius: 100%;
      }
    }
  }
}
</style>

<style lang="scss">
.el-form-item__label {
  margin-bottom: 5px;
}
.el-input {
  position: relative;
  &__wrapper {

  }
  &__inner {
    padding: 14px 0 14px 14px;
    width: 100%;
    border-radius: 15px;
    border: none;
    background-color: #26526F8C;
    color: $white;
    font-family: "Inter";
    font-size: 20px;
    line-height: 1.25em;

    &::placeholder {
      color: #FFFFFFB2;
    }
  }
}
</style>