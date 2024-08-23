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
    url: ''
  },
  {
    name: 'Сделать подарок',
    url: ''
  },
  {
    name: 'FAQ',
    url: ''
  }
]
</script>

<style lang="scss" scoped>
.header {
  background-color: $black;
  animation: show-navigation 1.2s;

  &__nav {
    padding: 28px 0;
    display: flex;
    justify-content: space-between;
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