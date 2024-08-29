<template>
  <div class="home">
    <h1 class="home__title">SteamSupp</h1>
    <section class="home__main">
      <div class="home__main--above-notifications">
        <CardTransparent img="steam-circle.png" text="<strong>Пополняй стим</strong><br>без проблем и задержек" />
        <CardTransparent text="Не требуется пароль,<br>доступ к стиму или трейду" />
      </div>
      <TopupForm />
      <div class="home__main--below-notifications">
        <CardColorful
          v-for="(card, id) in notificationCards"
          :key="id"
          :description="card.description"
          :theme="card.theme"
          :title="card.title" />
      </div>
    </section>
    <FAQ />
  </div>
</template>

<script setup lang="ts">
import CardColorful from '@/components/cards/CardColorful.vue'
import CardTransparent from '@/components/cards/CardTransparent.vue'
import FAQ from '@/components/FAQ.vue'
import TopupForm from '@/components/TopupForm.vue'

interface INotification {
  title: string;
  description: string;
  theme: 'red' | 'yellow'
}

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


</script>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 73px;
    line-height: 1.2em;
    text-align: center;
  }
  &__main {
    margin-top: 30px;
    margin-bottom: 100px;
    & > * {
      display: flex;
      column-gap: 30px;

      &:not(:first-child) {
        margin-top: 30px;
      }

      & > * {
        flex: 1 1 49%;
      }
    }
  }
}
</style>