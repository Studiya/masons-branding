<template>
  <section class="special-offers" id="specialOffers">
    <div class="wrapper">
      <div class="special-offers__head">
        <h3 class="special-offers__title"><span class="accent">Special</span> offers</h3>
        <p class="special-offers__subtitle subtitle">Hurry up to order</p>
      </div>
      <div class="special-offers__inner">
        <Carousel class="special-offers__carousel" v-bind="settings">
          <Slide v-for="item in offersList" :key="item.id">
            <div class="special-offers__slide">
              <div class="special-offers__slide-descr">
                <h4 class="special-offers__slide-title">{{ item.title }}</h4>
                <p class="special-offers__slide-text">{{ item.text }}</p>
                <a
                  class="special-offers__slide-btn btn btn_black"
                  :href="item.href"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
              <div class="special-offers__slide-img">
                <img :src="getImageUrl(item.imgSrc)" :alt="item.imgAlt" />
              </div></div
          ></Slide>
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

function getImageUrl(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

const offersList = [
  {
    id: 0,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 1,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 2,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'offers-section/offer-item.webp',
    imgAlt: 't-shirt',
    href: '#'
  }
]
</script>
<style lang="scss" scoped>
.special-offers {
  margin-bottom: 150px;

  @media screen and (max-width: $bp-medium) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }

  .wrapper {
    max-width: 1440px;
  }

  &__head {
    max-width: 1056px;
    margin: 0 auto -80px;

    @media screen and (max-width: $bp-medium) {
      padding: 0 30px;
    }

    @media screen and (max-width: $bp-tablet) {
      margin: 0 auto -20px;
    }
  }

  &__subtitle {
    color: var(--color-light);
  }

  &__inner {
    @include backgroundImg(
      '@/assets/images/offers-section/offers-bg.webp',
      center,
      100% 100%,
      no-repeat
    );
    padding: 100px 0;

    @media screen and (max-width: $bp-medium) {
      padding: 100px 30px;
    }

    @media screen and (max-width: $bp-tablet) {
      padding: 100px 10px;
    }

    @media screen and (max-width: $bp-mobile) {
      padding: 60px 10px;
    }
  }

  &__carousel {
    max-width: 1056px;
    margin: 0 auto;
  }

  &__slide {
    @include flex(flex, row, center, center, nowrap, 24px);
    text-align: left;

    @media screen and (max-width: $bp-large) {
      padding: 0 40px;
    }

    @media screen and (max-width: $bp-tablet) {
      gap: unset;
      padding: 0 20px;
    }

    &-descr {
      flex-basis: calc((100% - 24px) / 2);
    }

    &-title {
      color: var(--color-black);
      font-size: 52px;
      font-weight: 700;
      margin-bottom: 10px;

      @media screen and (max-width: $bp-medium) {
        font-size: 36px;
      }

      @media screen and (max-width: $bp-tablet) {
        font-size: 24px;
      }

      @media screen and (max-width: $bp-mobile) {
        font-size: 16px;
      }
    }

    &-text {
      color: var(--color-black);
      font-size: 24px;
      margin-bottom: 34px;

      @media screen and (max-width: $bp-medium) {
        font-size: 20px;
      }

      @media screen and (max-width: $bp-tablet) {
        font-size: 16px;
      }

      @media screen and (max-width: $bp-mobile) {
        font-size: 8px;
        line-height: 1.5;
        margin-bottom: 28px;
      }
    }

    &-btn {
      margin-left: 10px;
      display: inline-block;
      box-shadow: none;
    }

    &-img {
      max-width: 511px;
      flex-basis: calc((100% - 24px) / 2);
    }
  }
}
</style>
