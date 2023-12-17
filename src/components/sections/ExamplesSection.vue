<template>
  <section class="examples">
    <div class="wrapper">
      <div class="examples__inner">
        <h3 class="examples__title"><span class="accent">Exam</span>ples</h3>
        <p class="examples__subtitle subtitle">You can wear it</p>
        <Carousel class="examples__carousel" v-bind="settings">
          <Slide class="examples__slide" v-for="item in examplesList" :key="item.id">
            <a :href="item.href"><img :src="item.imgSrc" :alt="item.imgAlt" /></a
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
  itemsToShow: 3,
  itemsToScroll: 3,
  snapAlign: 'center'
}

const examplesList = [
  {
    id: 0,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 1,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 2,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 3,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 4,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 5,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  },
  {
    id: 6,
    href: '#',
    imgSrc: 'src/assets/images/examples-section/item.webp',
    imgAlt: 't-shirt'
  }
]
</script>

<style lang="scss" scoped>
.examples {
  margin-bottom: 150px;

  .wrapper {
    max-width: 1440px;
  }

  &__inner {
    max-width: 1056px;
    margin: 0 auto;
  }

  &__subtitle {
    margin-bottom: 30px;
  }

  &__slide {
    a {
      max-width: 272px;
    }
  }
}
</style>
