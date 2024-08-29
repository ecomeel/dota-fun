<template>
  <ElForm class="topup" :model="form">
    <div class="topup__form">
      <ElFormItem class="topup__item" label="Логин Steam">
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
        <!--
          <div class="topup__input--tip">
          <p>Где взять логин</p>
          <div class="topup__input--tip-icon">?</div>
          </div> 
        -->
      </ElFormItem>
      <ElFormItem class="topup__item" label="Сумма">
        <ElInputNumber 
          v-model="form.amount"
          :controls="false"
          :max="priceRange.max"
          :min="priceRange.min"
          placeholder="Введите сумму"
        >
          <template #append>
            <p class="topup__input--tip">Комиссия сервиса 18%</p>
          </template>
        </ElInputNumber>
        <p class="topup__input--description">До 10 000 рублей</p>
      </ElFormItem>
      <ElFormItem>
        <ElSlider 
          v-model="form.amount"
          :marks="priceRangeMarks"
          :max="priceRange.max"
          :min="priceRange.min"
          :show-tooltip="false" 
        />
        <p class="topup__input--description slider__description">Время зачисления до 60 секунд</p>
      </ElFormItem>
      <ElFormItem label="Почта">
        <ElInput v-model="form.email" placeholder="Для получения чека" />
      </ElFormItem>
    </div>
    <div class="topup__form">
      <ElFormItem label="Промокод">
        <ElInput v-model="form.promo" placeholder="Введите промокод">
          <template #append>
            <div class="topup__input--tip">
              <p>Где взять промокод</p>
              <div class="topup__input--tip-icon">?</div>
            </div>
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem label="Итого">
        <div class="el-input">
          <div class="el-input__wrapper" type="total">
            <p class="el-input__inner">{{ totalSum }} рублей</p>
          </div>
        </div>
      </ElFormItem>
      <div class="topup__warning">
        <p>Перед оплатой проверьте правильность указанного логина, иначе вы пополните стим другому человеку и мы не сможем вернуть деньги.</p>
      </div>
      <ElFormItem>
        <ElCheckbox v-model="form.isAgree">Я принимаю условия Пользовательского соглашения
          и подтверждаю ознакомление с FAQ</ElCheckbox>
      </ElFormItem>
      <button class="topup__button topup__field" @click.prevent="handleSendForm">Пополнить</button>
    </div>
  </ElForm>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface IForm {
  name: string | null;
  amount: number | null;
  email: string | null;
  promo: string | null;
  isAgree: boolean
}

const form = ref<IForm>({
  name: null,
  amount: null,
  email: null,
  promo: null,
  isAgree: false
})

const totalSum = computed(() => Math.ceil(form.value.amount! * 1.18))

const priceRange = {
  min: 100,
  max: 10000
}

const priceRangeMarks = {
  [priceRange.min]: priceRange.min + ' ₽',
  [priceRange.max]: priceRange.max + ' ₽'
}

function handleSendForm () {
  console.log('Send form')
}
</script>

<style scoped lang="scss">
.topup {
  &__form {
    padding: 25px 20px;
    flex: 0 0 48.7% !important;
    border: 1px solid #4E768F;
    border-radius: 15px;
    background-color: #1529368C;

    & > *:not(:first-child) {
      margin-top: 20px;
    }
  }
  &__item {
    position: relative;
  }
  &__field {
    padding: 14px 15px;
    width: 100%;
    border-radius: 15px;
    font-size: inherit;
    background-color: $blue-transparent;
    color: $white;
    border: none;
  }
  &__input {
    &--tip {
      position: absolute;
      right: 10px;
      top: calc(50% - 8px);
      display: flex;
      column-gap: 5px;
      @extend %extra-small;

      &-icon {
        padding: 0 5px;
        background-color: #D9D9D926;
        border-radius: 100%;
      }
    }
    &--description {
      margin-top: 8px;
      @extend %extra-small;
    }
  }
  &__warning {
    padding: 11px 15px;
    border-radius: 15px;
    background-color: $blue-transparent;
    p {
      font-size: 15px;
      line-height: 1.25em;
      opacity: 0.7;
    }
  }
  &__button {
    margin-top: 17px !important;
    cursor: pointer;
    transition: background-color, border-color .2s linear;
    border: 1px solid transparent;

    &:hover {
      background-color: #47718d8c;
      border-color: #6d859c;
    }
    &:focus {
      outline: none;
      border-color: #6d859c;
    }
  }
}

.slider {
  &__description {
    margin-top: 26px;
  }
}
</style>