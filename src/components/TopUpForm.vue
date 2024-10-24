<template>
  <ElForm 
    class="topup"
    :model="form"
  >
    <div class="topup__form">
      <ElFormItem class="topup__item" label="Логин Steam">
        <div class="topup__input--wrapper">
          <ElInput
            v-model="form.name"
            class="topup__input" 
            placeholder="Ваш логин"
          />
            <button class="topup__input--tip" @click.prevent="isLoginPopupOpen = true">
              <p>Где взять логин</p>
              <div class="topup__input--tip-icon">?</div>
            </button> 
        </div>
      </ElFormItem>
      <ElFormItem class="topup__item" label="Сумма">
        <div class="topup__input--wrapper">
          <ElInputNumber 
            v-model="form.amount"
            :controls="false"
            :max="priceRange.max"
            :min="priceRange.min"
            placeholder="Введите сумму"
          />
          <p class="topup__input--tip">
            Комиссия <span v-if="breakpoints.greater('mobile').value">сервиса </span>18%
          </p>
        </div>
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
        <p class="topup__input--description slider__description">
          Время зачисления до 60 секунд
        </p>
      </ElFormItem>
      <ElFormItem class="topup__item" label="Почта">
        <ElInput v-model="form.email" placeholder="Для получения чека" />
      </ElFormItem>
    </div>
    <div class="topup__form">
      <ElFormItem class="topup__item" label="Промокод">
        <div class="topup__input--wrapper">
          <ElInput v-model="form.promo" placeholder="Введите промокод" />
            <button 
              class="topup__input--tip" 
              @click.prevent="isPromoPopupOpen = true"
            >
              <p v-if="breakpoints.greater('small_mobile').value">
                {{ breakpoints.greater('large_tablet').value ? 'Где взять промокод' : 'Промокод' }}
              </p>
              <div class="topup__input--tip-icon">?</div>
            </button>
        </div>
      </ElFormItem>
      <ElFormItem class="topup__item" label="Итого">
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
        <ElCheckbox v-model="form.isAgree">
          <a 
            href="https://joki-joya.ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Я принимаю условия Пользовательского соглашения и подтверждаю ознакомление с FAQ
          </a>
        </ElCheckbox>
      </ElFormItem>
      <button class="topup__button topup__field" @click.prevent="handleSendForm">Пополнить</button>
    </div>
  </ElForm>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

const isLoginPopupOpen = defineModel<boolean>('loginPopup')
const isPromoPopupOpen = defineModel<boolean>('promoPopup')

const breakpoints = useBreakpoints({
  small_mobile: 375,
  mobile: 440,
  tablet: 767,
  large_tablet: 850
})

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
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.topup {
  &__form {
    padding: 25px 20px;
    border: 1px solid rgba($blue-gray, 0.7);
    border-radius: 15px;
    background-color: #1529368C;

    & > *:not(:first-child) {
      margin-top: 20px;
    }

    @media (min-width: $screen-xxl-min) {
      padding: 1.3vw 1.05vw;
      border-radius: 0.8vw;

      & > *:not(:first-child) {
        margin-top: 1.042vw;
      }
    }
  }
  &__item {
    position: relative;
    @media (min-width: $screen-xxl-min) {
      & > *:first-of-type {
        margin-bottom: 0.6vw;
        font-size: 1.1vw;
      }
    }
  }
  &__field {
    @extend %medium;
    padding: 14px 15px;
    width: 100%;
    border-radius: 15px;
    background-color: $blue-transparent;
    color: $white;
    border: none;
    @media(min-width: $screen-xxl-min) {
      padding: 0.78vw 1.041vw;
      border-radius: 0.78vw;
    }
  }
  &__input {
    &--tip {
      position: absolute;
      right: 10px;
      top: calc(50% - 9px);
      display: flex;
      align-items: center;
      column-gap: 5px;
      @extend %extra-small;

      &-icon {
        padding: 0 7px;
        line-height: 19px;
        background-color: #D9D9D926;
        border-radius: 100%;
      }
    }
    &--wrapper {
      position: relative;
    }
    &--description {
      margin-top: 8px;
      @extend %extra-small;
    }
    @media (min-width: $screen-xxl-min) {
      &--tip {
        right: 0.65vw;
        column-gap: 0.36vw;
        top: calc(50% - 0.45vw);
        &-icon {
          padding: 0 0.36vw;
          line-height: 1.1vw;
        }
      }
      &--description {
        margin-top: 0.42vw;
      }
    }
  }
  &__warning {
    padding: 11px 15px;
    border-radius: 15px;
    background-color: $blue-transparent;
    p {
      @extend %small;
      opacity: 0.7;
    }
    @media (min-width: $screen-xxl-min) {
      padding: 0.57vw 0.78vw;
      border-radius: 0.78vw;

      p {
        font-size: 0.9vw;
      }
    }
  }
  &__button {
    margin-top: 17px !important;
    cursor: pointer;
    transition: background-color, border-color .2s linear;
    border: 1px solid transparent;

    &:hover {
      background-color: #47718d8c;
      border-color: $blue-gray;
    }
    &:focus {
      outline: none;
      border-color: $blue-gray;
    }
    @media (min-width: $screen-xxl-min) {
      margin-top: 0.94vw !important;
      border-width: 0.1vw;
    }
  }
}

.slider {
  &__description {
    margin-top: 26px;
  }
  @media (min-width: $screen-xxl-min) {
    &__description {
      margin-top: 1.36vw;
    }
  }
}
</style>