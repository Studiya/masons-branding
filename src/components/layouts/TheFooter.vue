<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__inner">
        <div class="footer__soc">
          <a href="#"><img src="@/assets/images/logo.webp" alt="logo" /></a>
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
          <input type="email" id="subEmail" placeholder="Email" />
          <button type="submit">Apply</button>
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
  }

  &__inner {
    @include flex(flex, row, space-between, center, wrap, 75px);
  }
}
</style>
