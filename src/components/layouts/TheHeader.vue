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
            <li class="header__nav-item"><a href="">Services</a></li>
            <li class="header__nav-item"><a href="">Examples</a></li>
            <li class="header__nav-item"><a href="">Special Offers</a></li>
            <li class="header__nav-item"><a href="">Top Sales</a></li>
            <li class="header__nav-item"><a href="">Catalog</a></li>
            <li class="header__nav-item"><a href="">Feedback</a></li>
            <li class="header__nav-item"><a href="">Contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
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

        &:hover {
          font-weight: 700;
          //with shadows
        }
      }
    }
  }
}
</style>
