<template>
  <div class="home">
    <h1 id="topup" class="home__title" >{{ siteName }}</h1>
    <section class="home__main">
      <div class="home__main--above-notifications">
        <CardTransparent
          v-for="(card, idx) in topsideCards"
          :key="idx"
          :img="card.img"
          :text="card.text"
        />
      </div>
      <TopupForm 
        v-model:loginPopup="isLoginPopupOpen"
        v-model:promoPopup="isPromoPopupOpen"
      />
      <div class="home__main--below-notifications">
        <CardColorful
          v-for="(card, id) in notificationCards"
          :key="id"
          :description="card.description"
          :theme="card.theme!"
          :title="card.title" />
      </div>
    </section>
    <FAQ />
    <PopupFindLogin ref="modalFindLogin" v-model:loginPopup="isLoginPopupOpen" />
    <PopupPromo ref="modalPromo" v-model:promoPopup="isPromoPopupOpen" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import CardColorful from '@/components/cards/CardColorful.vue'
import CardTransparent from '@/components/cards/CardTransparent.vue'
import FAQ from '@/components/FAQ.vue'
import TopupForm from '@/components/TopupForm.vue'

const PopupFindLogin = defineAsyncComponent(() => import('@/components/popups/PopupFindLogin.vue'))
const modalFindLogin = ref<InstanceType<typeof PopupFindLogin>>()

const PopupPromo= defineAsyncComponent(() => import('@/components/popups/PopupPromo.vue'))
const modalPromo = ref<InstanceType<typeof PopupPromo>>()

const siteName = 'DotaFun'

interface INotification {
  title: string;
  description: string;
  theme: 'red' | 'yellow'
}

interface ITransparentCard {
  text: string;
  img?: string
}

const topsideCards: ITransparentCard[] = [
  {
    text: '<strong>Пополняй стим</strong><br>без проблем и задержек',
    img: 'steam-circle.png'
  },
  {
    text: 'Не требуется пароль,<br>доступ к стиму или трейду'
  }
]

const notificationCards: INotification[] = [
  {
    title: 'Важно знать',
    description: 'Указывайте только логин Steam. Мы пополняем аккаунты только из России. На данный момент пополнения аккаунтов из Крыма, Луганска и Донецка невозможно. ',
    theme: 'red'
  },
  {
    title: 'Важно знать',
    description: 'Нельзя оплачивать аккаунт на котором имеется блокировка, дополнительно прочитайте информацию о пополнении аккаунта на котором не было транзакций до этого!',
    theme: 'yellow'
  }
]

const isLoginPopupOpen = ref(false)
const isPromoPopupOpen = ref(false)

watch([isLoginPopupOpen, isPromoPopupOpen], () => {
  console.log(isPromoPopupOpen.value)
  document.querySelectorAll('.el-overlay-dialog')?.forEach(el => el.classList.toggle('blur-bg'))
})

</script>

<style scoped lang="scss">
.home {
  position: relative;
  &__title {
    @extend %extra-large;
    text-align: center;
  }
  &__main {
    margin-top: 30px;
    margin-bottom: 100px;
    & > * {
      &:not(:first-child), & > *:not(:first-child) {
        margin-top: 20px;
      }

      & > * {
        flex: 0 1 49%;
      }
    }

    @media (min-width: $screen-sm-min) {
      margin-bottom: 100px;
      & > * {
        width: 100%;
        display: flex;
        column-gap: 15px;
        flex-direction: row;
        & > *:not(:first-child) {
          margin-top: 0;
        }
      }
    }
    @media (min-width: $screen-m-min) {
      & > * {
        column-gap: 25px;
      }
    }
    @media (min-width: $screen-xl-min) {
      margin: 2.2vw 0 5.2vw;
      column-gap: 1.9vw;
    }
  }

}
</style>