<template>
  <header class="header">
    <ul class="header__nav container">
      <li v-for="(el, idx) in navigationMenu" :key="idx">
        <a :href="el.url">
          {{ el.name }}
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
const navigationMenu = [
  {
    name: 'DOTAFUN',
    url: ''
  },
  {
    name: 'Пополнить стим',
    url: '#topup'
  },
  {
    name: 'Сделать подарок',
    url: ''
  },
  {
    name: 'FAQ',
    url: '#faq'
  }
]
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 2020;
  background-color: $black;
  animation: show-navigation 1.2s;

  &__nav {
    width: 100%;
    padding: 22px;
    display: flex;
    justify-content: center;
    & > li > a {
      @extend %normal;
      transition: all 0.2s linear;
      
      &:hover {
        scale: 1.05;
        color: $blue-gray;
      }
    }
    & > li:not(:first-of-type) {
      display: none;

      @media (min-width: $screen-sm-min) {
        display: block;
      }
    }
    @media (min-width: $screen-s-min) {
      justify-content: space-around;
      & > li:nth-of-type(2) {
        display: block !important;
      }
    }
    @media (min-width: $screen-xl-min) {
      justify-content: space-between;
      padding: 1.7vw 0;
    }
  }
}

@keyframes show-navigation {
  from {
    transform: translateY(-100%);

  }
  to {
    transform: translateY(0);
  }
}
</style>