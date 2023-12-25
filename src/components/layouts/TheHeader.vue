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
          <a href="#"><img src="@/assets/images/logo.webp" alt="logo" /></a>
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
        <div class="header__mob-btn">
          <button type="button" @click="mobileMenuIsOpen = !mobileMenuIsOpen">
            <SvgIcon name="icons" setSymbol="icon-mob-nav-btn" />
          </button>
        </div>
      </div>
    </div>
    <div :class="{ 'is-open': mobileMenuIsOpen }" class="mobile-menu">
      <button
        @click="mobileMenuIsOpen = !mobileMenuIsOpen"
        class="mobile-menu__close-btn"
        type="button"
      >
        <SvgIcon name="icons" setSymbol="icon-cross" />
      </button>
      <div class="mobile-menu__wrapper">
        <a class="mobile-menu__logo" href="/">
          <img src="@/assets/images/logo.webp" alt="logo" />
        </a>
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__nav-list">
            <li class="mobile-menu__nav-item" v-for="item in navItems" :key="item.id">
              <a
                @click="mobileMenuIsOpen = !mobileMenuIsOpen"
                class="mobile-menu__nav-link"
                :href="item.href"
                >{{ item.text }}</a
              >
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
    href: '#services',
    text: 'Services'
  },
  {
    id: 1,
    href: '#examples',
    text: 'Examples'
  },
  {
    id: 2,
    href: '#specialOffers',
    text: 'Special Offers'
  },
  {
    id: 3,
    href: '#topSales',
    text: 'Top Sales'
  },
  {
    id: 4,
    href: '#catalog',
    text: 'Catalog'
  },
  {
    id: 5,
    href: '#feedback',
    text: 'Feedback'
  },
  {
    id: 6,
    href: '#contacts',
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

let mobileMenuIsOpen = ref(false)
</script>

<style lang="scss" scoped>
.header {
  @include position(absolute, 0, 0, auto, 0, 1);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(7, 7, 7, 1) 30%);
  .wrapper {
    max-width: 1010px;
  }

  &__inner {
    @include flex(flex, row, space-between, center, wrap, 25px 40px);
    padding: 20px 0 16px;

    @media screen and (max-width: $bp-medium) {
      padding: 20px 15px 16px;
      gap: 25px 30px;
    }

    @media screen and (max-width: $bp-tablet) {
      padding: 20px 20px 0;
      gap: 20px 15px;
      flex-wrap: nowrap;
    }

    @media screen and (max-width: $bp-mobile) {
      flex-wrap: wrap;
    }
  }

  &__search,
  &__logo,
  &__icons {
    flex-basis: calc((100% - 40px * 2) / 3);

    @media screen and (max-width: $bp-mobile) {
      flex-basis: calc((100% - 15px) / 2);
    }
  }

  &__search {
    @media screen and (max-width: $bp-mobile) {
      flex-grow: 2;
    }

    &-inner {
      max-width: 225px;
      height: 30px;
      position: relative;
    }

    &-label {
      display: block;
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
    text-align: center;

    @media screen and (max-width: $bp-mobile) {
      order: 1;
      text-align: left;
    }

    a {
      display: inline-block;
      max-width: 184px;
    }
  }

  &__icons {
    @media screen and (max-width: $bp-tablet) {
      flex-basis: calc((100% - 15px * 2) / 6);
    }

    &-list {
      @include flex(flex, row, flex-end, center, nowrap, 30px);

      @media screen and (max-width: $bp-mobile) {
        gap: 20px;
      }
    }

    &-item {
      a {
        display: inline-block;
        width: 25px;
        height: 25px;
        @include transition(transform, 0.3s, ease-in, 0s);

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  &__nav {
    width: 100%;

    @media screen and (max-width: $bp-tablet) {
      display: none;
    }

    &-list {
      margin: 0 auto;
      @include flex(flex, row, center, flex-start, nowrap, 50px);

      @media screen and (max-width: $bp-medium) {
        gap: 20px;
      }
    }

    &-item {
      a {
        color: var(--color-light);
        font-size: 18px;
        font-weight: 300;
        @include transition((color), 0.3s, ease-out, 0s);
        position: relative;

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

          @media screen and (max-width: $bp-medium) {
            width: calc(100% + 20px);
            height: calc(100% + 10px);
          }
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

  &__mob-btn {
    display: none;
    flex-basis: calc((100% - 15px * 2) / 6);
    text-align: right;

    @media screen and (max-width: $bp-tablet) {
      display: block;
    }

    @media screen and (max-width: $bp-mobile) {
      order: 3;
    }

    button {
      width: 31px;
      height: 22px;
      background-color: transparent;
      border: none;

      &:active {
        svg {
          transform: scale(0.8);
        }
      }

      svg {
        width: 100%;
        height: 100%;
        fill: var(--color-yellow);
        @include transition(transform, 0.3s, ease-in, 0s);
      }
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-yellow);
    transform: translateX(100%);
    transition: transform 0.4s;

    &.is-open {
      transform: translateX(0);
    }

    &__wrapper {
      padding: 30px;

      @media screen and (max-width: $bp-mobile) {
        padding: 16px 24px;
      }
    }

    &__logo {
      display: inline-block;
      width: 184px;
      height: 63px;
      fill: var(--color-orange);
      margin-bottom: 30px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__close-btn {
      position: absolute;
      inset: 20px 20px auto auto;
      background-color: transparent;
      border: none;
      width: 24px;
      height: 23px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__nav {
      margin-bottom: 30px;

      &-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 16px;
      }

      &-link {
        color: var(--color-dark);

        &:hover,
        &:active {
          color: var(--color-black);
          font-weight: 600;
        }
      }
    }
  }
}
</style>
