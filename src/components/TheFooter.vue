<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__img_left">
        <img alt="steam" src="/steam-circle.png">
      </div>
      <ul class="footer__links">
        <li
          v-for="(item, index) in footerLinks"
          :key="index"
        >
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
      
      <div class="footer__img_right">
        <img 
        alt="steam"
        src="/steam-bg.png"
        >
      </div> 
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  {
    link: '#topup',
    name: 'Пополнить стим'
  },
  {
    link: '',
    name: 'Поддержка'
  },
  {
    link: '',
    name: 'Сделать подарок'
  },
  {
    link: '',
    name: 'Сотрудничество'
  },
  {
    link: '#faq',
    name: 'FAQ'
  }
]
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;
  overflow: hidden;
  // position: relative;
  .container {
    position: relative;
    padding: 38px 20px;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  &__img {
    &_left {
      width: 160px;
      opacity: 0.51;
    }
    &_right {
      display: none;

      @media (min-width: $screen-m-min) {
        position: absolute;
        top: -20px;
        right: -40px;
        width: 450px;
        display: block;
      }
      @media (min-width: $screen-xxl-min) {
        width: 26vw;
      }
    }
  }
  &__links {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    & > li {
      @extend %medium;
      align-self: flex-end;
      text-align: right;
      transition: all 0.2s linear;
      
      &:hover {
        scale: 1.05;
        color: $blue-gray;
      }
    }
    @media (min-width: $screen-s-min) {
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 500px;
    }
    @media (min-width: $screen-sm-min) {
      gap: 15px 100px;
    }
  }
  @media (min-width: $screen-xxl-min) {
    .container {
      padding: 2.1vw 0;
      column-gap: 1.38vw;
    }
    &__img {
      &_left {
        width: 9.5vw;

      }
    }
    &__links {
      gap: 1.04vw 6.9vw;
      max-width: 30vw;
    }
  }
}
</style>
