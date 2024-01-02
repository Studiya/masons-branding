<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__inner">
        <div class="footer__soc">
          <a href="#"><img class="footer__logo" src="@/assets/images/logo.webp" alt="logo" /></a>
          <ul class="footer__soc-list">
            <li class="footer__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-telegram" /></a>
            </li>
            <li class="footer__soc-item">
              <a href="#"><SvgIcon name="icons" setSymbol="icon-viber" /></a>
            </li>
          </ul>
        </div>
        <nav class="footer__nav">
          <div class="footer__nav_left">
            <h4 class="footer__nav-title">About us</h4>
            <ul class="footer__nav-list">
              <li class="footer__nav-item" v-for="item in navList1" :key="item.id">
                <a :href="item.href">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__nav_right">
            <h4 class="footer__nav-title">Decide</h4>
            <ul class="footer__nav-list">
              <li class="footer__nav-item" v-for="item in navList2" :key="item.id">
                <a :href="item.href">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
        <form class="footer__form" action="">
          <h4 class="footer__form-title">If you want to know about new products</h4>
          <p class="footer__form-subtitle">Receive letters with surprises from us</p>
          <label for="subEmail">Email</label>
          <div class="footer__form-inner">
            <input type="email" id="subEmail" placeholder="Email" />
            <button class="footer__form-btn btn btn_yellow" type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navList1 = [
  {
    id: 0,
    href: '#services',
    name: 'Our Services'
  },
  {
    id: 1,
    href: '#examples',
    name: 'Examples'
  },
  {
    id: 2,
    href: '#specialOffers',
    name: 'Special offers'
  },
  {
    id: 3,
    href: '#topSales',
    name: 'Top Sales'
  }
]

const navList2 = [
  {
    id: 0,
    href: '#catalog',
    name: 'Catalog'
  },
  {
    id: 1,
    href: '#feedback',
    name: 'Feedback'
  },
  {
    id: 2,
    href: '#video',
    name: 'Our Video'
  },
  {
    id: 3,
    href: '#contacts',
    name: 'Contacts'
  }
]
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-dark);

  .wrapper {
    max-width: 1100px;
    padding: 43px 0 66px;

    @media screen and (max-width: $bp-large) {
      padding: 43px 20px 66px;
    }

    @media screen and (max-width: $bp-medium) {
      padding: 43px 40px 66px;
    }

    @media screen and (max-width: $bp-mobile) {
      padding: 0 15px 40px;
    }
  }

  &__inner {
    @include flex(flex, row, space-between, center, nowrap, 75px);

    @media screen and (max-width: $bp-large) {
      gap: 40px;
    }

    @media screen and (max-width: $bp-medium) {
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  &__logo {
    width: 184px;
    margin-bottom: 14px;

    @media screen and (max-width: $bp-mobile) {
      width: 140px;
      margin-bottom: 0;
    }
  }

  &__soc {
    @media screen and (max-width: $bp-medium) {
      @include flex(flex, row, space-between, center, nowrap, 100px);
      flex-basis: 100%;
    }

    @media screen and (max-width: $bp-mobile) {
      gap: 30px;
    }

    &-list {
      @include flex(flex, row, flex-start, flex-start, wrap, 30px);
    }

    &-item {
      a {
        width: 40px;
        height: 40px;
        background: var(--color-yellow);
        border-radius: 5px;
        @include flex(flex, row, center, center, nowrap, unset);
        @include transition(transform, 0.3s, ease-in, 0s);

        &:hover {
          transform: scale(1.1);
        }
      }

      svg {
        width: 60%;
        height: 60%;
      }
    }
  }

  &__nav {
    @include flex(flex, row, flex-start, flex-start, wrap, 75px);

    @media screen and (max-width: $bp-large) {
      gap: 40px;
    }

    @media screen and (max-width: $bp-tablet) {
      flex-basis: 100%;
    }

    &-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 18px;
    }

    &-list {
      @include flex(flex, column, flex-start, flex-start, nowrap, 8px);

      @media screen and (max-width: $bp-mobile) {
        gap: 15px;
      }
    }

    &-item {
      a {
        color: var(--color-grey);
        font-size: 16px;
        display: inline-block;
        position: relative;
        @include transition(color, 0.3s, ease-in, 0s);

        &:after {
          content: '';
          display: block;
          width: 0px;
          height: 2px;
          background-color: var(--color-light);
          @include transition(width, 0.3s, ease-in, 0s);
          @include position(absolute, auto, 0, -2px, 0, 0);
        }

        &:hover {
          color: var(--color-light);

          &:after {
            width: 100%;
          }
        }
      }
    }
  }

  &__form {
    @media screen and (max-width: $bp-medium) {
      flex-basis: 50%;
    }

    @media screen and (max-width: $bp-tablet) {
      flex-basis: 100%;
    }

    &-title {
      font-size: 20px;
      font-weight: 600;
    }

    &-subtitle {
      color: var(--color-grey);
      font-size: 14px;
      margin-bottom: 11px;
    }

    &-inner {
      @include flex(flex, row, flex-start, center, nowrap, 15px);
    }

    input {
      font-size: 12px;
      font-weight: 300;
      padding: 7px 14px 8px;
      background-color: #363636;
      max-width: 200px;

      &::placeholder {
        font-size: 12px;
        font-weight: 300;
      }
    }

    &-btn {
      font-size: 12px;
      font-weight: 500;
      padding: 7px 16px 8px;
      box-shadow: none;
    }
  }
}
</style>
