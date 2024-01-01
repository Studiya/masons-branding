<template>
  <section class="feedback" id="feedback">
    <div class="wrapper">
      <h2 class="feedback__title"><span class="accent">Feed</span>back</h2>
      <p class="feedback__subtitle subtitle">Just look what your neighbor says about us!</p>
      <div class="feedback__inner">
        <Carousel class="feedback__carousel" v-bind="settings">
          <Slide class="feedback__slide" v-for="item in feedbackList" :key="item.id">
            <img class="feedback__slide-img" :src="item.imgSrc" :alt="item.imgAlt"
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

const feedbackList = [
  {
    id: 0,
    imgSrc: 'src/assets/images/feedback-section/iphone.webp',
    imgAlt: 'feedback'
  },
  {
    id: 1,
    imgSrc: 'src/assets/images/feedback-section/iphone.webp',
    imgAlt: 'feedback'
  },
  {
    id: 2,
    imgSrc: 'src/assets/images/feedback-section/iphone.webp',
    imgAlt: 'feedback'
  }
]
</script>

<style lang="scss" scoped>
.feedback {
  text-align: center;
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

  &__subtitle {
    display: block;
    max-width: 675px;
    margin: 0 auto 100px;

    @media screen and (max-width: $bp-medium) {
      margin: 0 auto 70px;
    }

    @media screen and (max-width: $bp-tablet) {
      margin: 0 auto 50px;
    }

    @media screen and (max-width: $bp-mobile) {
      padding: 0 10px;
    }
  }

  &__inner {
    @include backgroundImg(
      '@/assets/images/feedback-section/bg-feedback.webp',
      center,
      100% 600px,
      no-repeat
    );

    @media screen and (max-width: $bp-tablet) {
      background-size: 100% 485px;
    }

    @media screen and (max-width: $bp-mobile) {
      background-size: 100% 340px;
    }
  }

  &__carousel {
    max-width: 440px;
    margin: 0 auto;

    @media screen and (max-width: $bp-medium) {
      max-width: 320px;
    }

    @media screen and (max-width: $bp-tablet) {
      max-width: 240px;
    }

    @media screen and (max-width: $bp-mobile) {
      max-width: 166px;
    }
  }
}
</style>
