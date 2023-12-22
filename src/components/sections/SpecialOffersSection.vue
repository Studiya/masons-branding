<template>
  <section class="special-offers" id="specialOffers">
    <div class="wrapper">
      <div class="special-offers__inner">
        <h3 class="special-offers__title"><span class="accent">Special</span> offers</h3>
        <p class="special-offers__subtitle subtitle">Hurry up to order</p>
        <Carousel class="special-offers__carousel" v-bind="settings">
          <Slide class="special-offers__slide" v-for="item in offersList" :key="item.id">
            <div class="special-offers__slide-descr">
              <h4 class="special-offers__slide-title">{{ item.title }}</h4>
              <p class="special-offers__slide-text">{{ item.text }}</p>
              <a class="special-offers__slide-btn btn btn_black" :href="item.href" target="_blank">
                Read more
              </a>
            </div>
            <img class="special-offers__slide-img" :src="item.imgSrc" :alt="item.imgAlt"
          /></Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const settings = {
  itemsToShow: 1,
  itemsToScroll: 1,
  snapAlign: 'center'
}

const offersList = [
  {
    id: 0,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'src/assets/images/offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 1,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'src/assets/images/offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 2,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'src/assets/images/offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  }
]
</script>
<style lang="scss" scoped>
.special-offers {
  margin-bottom: 150px;

  .wrapper {
    max-width: 1440px;
    @include backgroundImg(
      '@/assets/images/offers-section/offers-bg.webp',
      center,
      100% 600px,
      no-repeat
    );
  }

  &__inner {
    max-width: 1056px;
    margin: 0 auto;
  }

  &__subtitle {
    color: var(--color-light);
  }

  &__slide {
    text-align: left;
    gap: 24px;

    &-title {
      color: var(--color-black);
      font-size: 52px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    &-text {
      color: var(--color-black);
      font-size: 24px;
      margin-bottom: 34px;
    }

    &-btn {
      margin-left: 10px;
      display: inline-block;
      box-shadow: none;
    }

    &-img {
      width: 511px;
    }
  }
}
</style>
