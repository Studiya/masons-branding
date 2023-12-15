<template>
  <section class="special-offers">
    <div class="wrapper">
      <div class="special-offers__inner">
        <h3 class="special-offers__title"><span class="accent">Special</span> offers</h3>
        <p class="special-offers__subtitle">Hurry up to order</p>
        <Carousel class="special-offers__carousel" v-bind="settings">
          <Slide class="special-offers__slide" v-for="item in offersList" :key="item.id">
            <div class="special-offers__slide-descr">
              <h4 class="special-offers__slide-title">{{ item.title }}</h4>
              <p class="special-offers__slide-text">{{ item.text }}</p>
              <a class="special-offers__slide-btn btn btn_black" :href="item.href"> Read more </a>
            </div>
            <img :src="item.imgSrc" :alt="item.imgAlt"
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
    imgSrc: 'src/assets/images/examples-section/item.png',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 1,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'src/assets/images/examples-section/item.png',
    imgAlt: 't-shirt',
    href: '#'
  },
  {
    id: 2,
    title: 'Russian ship go ... yourself',
    text: 'Buy a T-shirt and 10% of each purchase will go to the needs of the Armed Forces of Ukraine. Buy a stylish T-shirt and support your brother at the front!',
    imgSrc: 'src/assets/images/examples-section/item.png',
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
  }

  &__inner {
    max-width: 1056px;
    margin: 0 auto;
  }

  &__subtitle {
    color: var(--color-grey);
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 30px;
  }
}
</style>
