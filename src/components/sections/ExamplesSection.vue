<template>
  <section class="examples" id="examples">
    <div class="wrapper">
      <div class="examples__inner">
        <h3 class="examples__title"><span class="accent">Exam</span>ples</h3>
        <p class="examples__subtitle subtitle">You can wear it</p>
        <Carousel class="examples__carousel" v-bind="settings" :breakpoints="breakpoints">
          <Slide class="examples__slide" v-for="item in examplesList" :key="item.id">
            <a :href="item.href" target="_blank"><img :src="item.imgSrc" :alt="item.imgAlt" /></a
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

const breakpoints = {
  1025: {
    itemsToShow: 3,
    itemsToScroll: 3,
    snapAlign: 'center'
  },

  769: {
    itemsToShow: 2,
    itemsToScroll: 2,
    snapAlign: 'start'
  }
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

  @media screen and (max-width: $bp-medium) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: $bp-tablet) {
    margin-bottom: 56px;
  }

  .wrapper {
    max-width: 1440px;
  }

  &__inner {
    max-width: 1056px;
    margin: 0 auto;

    @media screen and (max-width: $bp-large) {
      padding: 0 30px;
    }

    @media screen and (max-width: $bp-medium) {
      max-width: 800px;
    }

    @media screen and (max-width: $bp-tablet) {
      max-width: 320px;
    }
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
