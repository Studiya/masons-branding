<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__inner">
        <form class="header__search" name="search-form" autocomplete="off">
          <div class="header__search-inner">
            <label class="header__search-label" for="site-search"
              ><SvgIcon name="icons" setSymbol="icon-search"
            /></label>
            <input
              class="header__search-input"
              type="search"
              id="site-search"
              v-model="searchValue"
              @focus="focusSearch"
              @blur="focusOutSearch"
            />
          </div>
        </form>
        <div class="header__logo">
          <a href="#"><img src="@/assets/images/logo.png" alt="logo" /></a>
        </div>
        <div class="header__icons">
          <ul class="header__icons-list">
            <li class="header__icons-item">
              <a href=""><SvgIcon name="icons" setSymbol="icon-cart" /></a>
            </li>
            <li class="header__icons-item">
              <a href=""><SvgIcon name="icons" setSymbol="icon-like" /></a>
            </li>
          </ul>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item" v-for="item in navItems" :key="item.id">
              <a :href="item.href" :name="item.text">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  {
    id: 0,
    href: '#',
    text: 'Services'
  },
  {
    id: 1,
    href: '#',
    text: 'Examples'
  },
  {
    id: 2,
    href: '#',
    text: 'Special Offers'
  },
  {
    id: 3,
    href: '#',
    text: 'Top Sales'
  },
  {
    id: 4,
    href: '#',
    text: 'Catalog'
  },
  {
    id: 5,
    href: '#',
    text: 'Feedback'
  },
  {
    id: 6,
    href: '#',
    text: 'Contacts'
  }
]

const searchValue = ref('Search')

function focusSearch() {
  if (searchValue.value == 'Search') {
    searchValue.value = ''
  }
}

function focusOutSearch() {
  if (!searchValue.value) {
    searchValue.value = 'Search'
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include position(absolute, 0, 0, auto, 0, 1);
  .wrapper {
    max-width: 1010px;
  }

  &__inner {
    @include flex(flex, row, space-between, center, wrap, 25px 40px);
    padding: 20px 0 16px;
  }

  &__search {
    flex-basis: calc((100% - 40px * 2) / 3);

    &-inner {
      width: 225px;
      height: 30px;
      position: relative;
    }

    &-label {
      width: 15px;
      height: 15px;
      @include position(absolute, 7px, 0, 0, 13px, 0);
      pointer-events: none;
    }

    &-input {
      width: 100%;
      height: 100%;
      padding: 0 15px 0 32px;
      color: var(--color-light);
      background: transparent;
      border: 1px solid var(--color-light);
      border-radius: 15px;
      font-size: 12px;
    }
  }

  &__logo {
    flex-basis: calc((100% - 40px * 2) / 3);
    text-align: center;

    a {
      display: inline-block;
      width: 184px;
    }
  }

  &__icons {
    flex-basis: calc((100% - 40px * 2) / 3);

    &-list {
      @include flex(flex, row, flex-end, center, nowrap, 30px);
    }

    &-item {
      a {
        display: inline-block;
        width: 25px;
        height: 25px;
      }
    }
  }

  &__nav {
    width: 100%;

    &-list {
      margin: 0 auto;
      @include flex(flex, row, center, flex-start, nowrap, 50px);
    }

    &-item {
      a {
        color: var(--color-light);
        font-size: 18px;
        font-weight: 300;
        @include transition((color), 0.3s, ease-out, 0s);
        position: relative;
        // @include flex(flex, row, center, center, nowrap, unset);

        &:before {
          content: attr(name);
          color: transparent;
          font-weight: 700;
          display: block;
          width: calc(100% + 10px);
          @include position(absolute, 0, auto, auto, -2px, 0);
          @include transition(color, 0.3s, ease-out, 0s);
          pointer-events: none;
        }

        &:after {
          content: '';
          display: block;
          width: calc(100% + 62px);
          height: calc(100% + 30px);
          @include position(absolute, 50%, auto, auto, 50%, -1);
          transform: translate(-50%, -50%) skew(-20deg);
          background-color: transparent;
          @include transition(background-color, 0.3s, ease-out, 0s);
        }

        &:hover {
          color: transparent;

          &:before {
            color: var(--color-black);
          }

          &:after {
            background-color: var(--color-light);
          }
        }
      }
    }
  }
}
</style>
